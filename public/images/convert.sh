#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage: $0 <input-image>"
    exit 1
fi

input_file="$1"
filename=$(basename -- "$input_file")
filename_noext="${filename%.*}"

# Array of desired widths
widths=(320 480 640 768 960 1024 1366 1600 1920)

# Create output directory if it doesn't exist
mkdir -p "webp_output"

# Function to convert to webp with quality=80
convert_to_webp() {
    local input="$1"
    local width="$2"
    local output="${filename_noext}/${width}w.webp"

    mkdir -p ${filename_noext}
    
    # Resize and convert to webp
    cwebp -q 85 -resize "$width" 0 "$input" -o "$output"
    
    if [ $? -eq 0 ]; then
        echo "Created: $output"
    else
        echo "Error creating: $output"
    fi
}

# Check if input file exists
if [ ! -f "$input_file" ]; then
    echo "Error: Input file '$input_file' does not exist"
    exit 1
fi

# Process each width
for width in "${widths[@]}"; do
    convert_to_webp "$input_file" "$width"
done

echo "Conversion complete. Files saved in webp_output directory."
