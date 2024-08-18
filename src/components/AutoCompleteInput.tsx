import { Address } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface AutoCompleteInputProps {
  address: Address;
  setAddress: (address: Address) => void;
}

export default function AutoCompleteInput({
  address,
  setAddress,
}: AutoCompleteInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    const autocomplete = new google.maps.places.Autocomplete(inputRef.current);
    autocomplete.setFields([
      "address_components",
      "formatted_address",
      "geometry",
    ]);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) {
            if(inputRef.current) inputRef.current.value = "";
            return;
        }

      setAddress({
        location: {
          lng: place.geometry.location.lng(),
          lat: place.geometry.location.lat(),
        },
        name: inputRef.current?.value || place.formatted_address,
      });
    });

    return () => {
        google.maps.event.clearListeners(autocomplete, 'place_changed');
        }
  }, []);

  return (
    <div className="mb-6">
      <label className="block text-sm text-gray-700 font-bold">লোকেশন</label>
      <input
        ref={inputRef}
        type="text"
        className="mt-1 block w-full px-3 py-2 border bg-slate-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="এলাকা, শহর, জায়গার নাম সার্চ করে সিলেক্ট করুন"
        required
      />
    </div>
  );
}
