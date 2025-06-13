# Askewsoft.com

This is an Astro based content site to highlight a portfolio of software projects.

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run deploy`          | Deploy to S3 and invalidate CloudFront cache     |

## 🚀 Deploy
1. Ensure you have AWS CLI installed and configured with appropriate credentials
2. Set your CloudFront distribution ID as an environment variable:
   ```sh
   echo "CLOUDFRONT_DISTRIBUTION_ID=<your-distribution-id>" > .env
   ```
3. Build and deploy:
   ```sh
   npm run build
   npm run deploy
   ```
4. Confirm deployment at https://askewsoft.com where it is served via CloudFront & Route 53

## 👀 About Astro

Feel free to check the [Astro documentation](https://docs.astro.build) or jump into the [Astro Discord server](https://astro.build/chat).
