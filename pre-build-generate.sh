#!/bin/bash

# Store file names in a Bash array
files=($(ls static/images/weebos_avif))

# Generate JavaScript code with the array
cat /dev/null > assets/js/image-array.js

echo '// This file is dynamically generated from pre-build script. Proceed with cautions when manually edit something!
let imgArray = [' >> assets/js/image-array.js

# Iterate through the file names and add them to the JavaScript array
for file in "${files[@]}"; do
  echo "  \"$file\", " >> assets/js/image-array.js
done

# Close the JavaScript array
echo "];" >> assets/js/image-array.js