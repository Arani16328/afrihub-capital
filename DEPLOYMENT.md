
# cPanel Deployment Instructions

## Steps to deploy to cPanel hosting:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Upload all contents of the `dist` folder to your cPanel's `public_html` directory
   - Make sure the `.htaccess` file is included (it might be hidden)

3. **File structure in cPanel:**
   ```
   public_html/
   ├── .htaccess
   ├── index.html
   ├── assets/
   │   ├── css/
   │   ├── js/
   │   └── images/
   └── favicon.ico
   ```

4. **Important notes:**
   - The `.htaccess` file handles client-side routing
   - Make sure your cPanel supports Apache and mod_rewrite
   - If you encounter issues, check that the .htaccess file was uploaded correctly
   - Some shared hosts may require you to enable mod_rewrite in the control panel

## Common cPanel Issues and Solutions:

- **Blank page:** Ensure .htaccess file is present and mod_rewrite is enabled
- **404 errors on routes:** Check that the .htaccess rewrite rules are working
- **Slow loading:** The build is optimized with compression and caching headers
- **Images not loading:** Verify all image URLs are relative and files uploaded correctly

## Testing:
After deployment, test all routes to ensure client-side routing works correctly.
