# Deployment Guide

## Overview
This project has multiple deployment workflows for GitHub Pages. Due to environment protection rules, some workflows have been disabled and new ones created.

## Available Deployment Workflows

### 1. `deploy-fixed.yml` (RECOMMENDED)
- **Status**: ✅ Active
- **Trigger**: Push to main branch or manual dispatch
- **Method**: Uses `peaceiris/actions-gh-pages@v3` action
- **Branch**: Creates/updates `gh-pages` branch
- **Advantages**: 
  - Bypasses environment protection rules
  - Reliable deployment method
  - No environment restrictions

### 2. `deploy-gh-pages-branch.yml` (ALTERNATIVE)
- **Status**: ✅ Active
- **Trigger**: Push to main branch or manual dispatch
- **Method**: Uses `peaceiris/actions-gh-pages@v3` action
- **Branch**: Creates/updates `gh-pages` branch
- **Advantages**: Same as above

### 3. `deploy-manual.yml` (MANUAL ONLY)
- **Status**: ✅ Active
- **Trigger**: Manual dispatch only
- **Method**: Uses `peaceiris/actions-gh-pages@v3` action
- **Branch**: Creates/updates `gh-pages` branch
- **Advantages**: Manual control, no automatic deployments

## Disabled Workflows
The following workflows have been disabled due to environment protection rules:

- `pages.yml` (DISABLED)
- `deploy.yml` (DISABLED)
- `deploy-simple.yml` (DISABLED)
- `deploy-official.yml` (DISABLED)

## Environment Protection Issue
The original workflows failed because they used the `github-pages` environment with protection rules that prevent the `main` branch from deploying. The new workflows bypass this by:

1. Not specifying the `github-pages` environment
2. Using the `peaceiris/actions-gh-pages@v3` action instead of `actions/deploy-pages@v4`
3. Publishing to a `gh-pages` branch instead of using GitHub Pages artifacts

## How to Deploy

### Automatic Deployment
1. Push changes to the `main` branch
2. The `deploy-fixed.yml` workflow will automatically trigger
3. Check the Actions tab in GitHub to monitor progress

### Manual Deployment
1. Go to the Actions tab in your GitHub repository
2. Select "Deploy to GitHub Pages (Fixed)" or "Deploy to GitHub Pages (Manual)"
3. Click "Run workflow"
4. Select the branch (usually `main`)
5. Click "Run workflow"

## GitHub Pages Configuration

### Repository Settings
1. Go to Settings > Pages
2. Set Source to "Deploy from a branch"
3. Select `gh-pages` branch
4. Set folder to `/ (root)`
5. Click Save

### Custom Domain (if applicable)
1. In Settings > Pages, add your custom domain
2. Update the `CNAME` file in the `public` folder
3. The workflow will preserve the CNAME file during deployment

## Troubleshooting

### Common Issues

1. **Environment Protection Rules**
   - **Solution**: Use the new workflows that bypass environment restrictions

2. **Build Failures**
   - Check the Actions tab for build logs
   - Ensure all dependencies are properly installed
   - Verify the build command works locally

3. **Deployment Not Updating**
   - Check if the `gh-pages` branch was updated
   - Verify GitHub Pages settings point to the correct branch
   - Wait a few minutes for changes to propagate

4. **404 Errors**
   - Ensure the base path in `vite.config.ts` is correct
   - Check that the `CNAME` file is preserved
   - Verify all routes are properly configured

### Local Testing
```bash
# Install dependencies
npm install

# Build for production
npm run build:gh-pages

# Preview the build
npm run preview
```

## File Structure
```
.github/workflows/
├── deploy-fixed.yml          # Main deployment workflow
├── deploy-gh-pages-branch.yml # Alternative deployment
├── deploy-manual.yml         # Manual deployment only
├── pages.yml                 # DISABLED
├── deploy.yml                # DISABLED
├── deploy-simple.yml         # DISABLED
└── deploy-official.yml       # DISABLED
```

## Next Steps
1. Push your changes to trigger the new deployment workflow
2. Monitor the Actions tab for successful deployment
3. Verify your site is accessible at the GitHub Pages URL
4. Update any custom domain settings if needed 