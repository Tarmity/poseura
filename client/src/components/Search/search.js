

function Search() {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => -27.4698, lng: () => 153.0251 },
            radius: 200 * 1000,
        }
    });
    return (
        <div className="search">
            <Combobox onSelect={async (address) => {
                setValue(address, false);
                clearSuggestions()

                try {
                    const results = await getGeocode({ address });
                    const { lat, lng } = await getLatLng(results[0]);
                } catch (error) {
                    console.log("error!")
                }
            }}
            >
                <ComboboxInput value={value} onChange={(event) => {
                    setValue(event.target.value);
                }}
                    disabled={!ready}
                    placeholder="Search Places ..."
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" &&
                            data.map(({ id, description }) => (
                                <ComboboxOption key={id} value={description} />
                            ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    );
}