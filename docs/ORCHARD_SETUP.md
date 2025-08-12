# Orchard CMS Setup

This project uses a separate [Orchard Core](https://orchardcore.net/) instance for content management.
The configuration below enables only the features necessary for page content, widgets and basic SEO.

## Required Modules
Enable the following Orchard Core features:

- `OrchardCore.Contents` – base content framework
- `OrchardCore.ContentTypes` & `OrchardCore.ContentFields`
- `OrchardCore.Pages`
- `OrchardCore.Widgets` and `OrchardCore.Html`
- `OrchardCore.Media`
- `OrchardCore.Themes`
- `OrchardCore.Navigation`
- `OrchardCore.Seo`
- `OrchardCore.Sitemaps`
- `OrchardCore.Robots`

## Docker Compose
A minimal docker-compose file can run Orchard with a SQLite database:

```yaml
version: "3.8"
services:
  orchard:
    image: orchardproject/orchardcore-cms:latest
    ports:
      - "8080:80"
    volumes:
      - orchard-data:/app/App_Data
    environment:
      - ORCHARD_APPDATA=/app/App_Data
volumes:
  orchard-data:
```

After the container starts, navigate to `http://localhost:8080` and follow the setup wizard.
When prompted, choose **Recipe: `Blog`** (or any recipe you prefer) and then enable the modules listed above from the **Features** menu.

## Usage
Once Orchard Core is running:

1. Create pages under **Content → Pages**.
2. Place widgets via **Design → Widgets**.
3. Manage SEO options in **Configuration → Settings → SEO**.
4. The front‑end in this repository can fetch rendered pages or use Orchard's APIs for dynamic content.

