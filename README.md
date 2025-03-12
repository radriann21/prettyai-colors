# Prettyaicolors

## Description
A web app that allows to the user generate color palettes very easily with a realtime visualization. Using user input, random generation and AI generation.

## Tech Stack
- Frontend: TypeScript, NextJS, TailwindCSS, DaisyUI
- Deployment: Vercel
- API: Vercel AI SDK
- Libraries: chroma-js

## Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/radriann21/prettyai-colors.git
cd prettyai-colors
npm install
```

## Running the App
```bash
npm run dev
```
For production:

```bash
npm run build
npm start
```


## Environment Variables
Create a `.env.local` file and add the following:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key
```


## Features
- Different ways of color generation
- Save palettes
- Real-time visualization
- Contrast 


## Deployment
1. Build the project:

```bash
npm run build
```

2. Deploy using: Vercel


## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch `git checkout -b feature-branch`
3. Commit changes `git commit -m "Added new features"`
4. Push the branch `git push origin feature-branch`
5. Open a pull request


## License
This project is licensed under the MIT License. See the `LICENSE` file for details.