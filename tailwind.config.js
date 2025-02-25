module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "var(--mat-sys-primary)",
        secondary: "var(--mat-sys-secondary)",
        tertiary: "var(--mat-sys-tertiary)",
        error: "var(--error)",
        success: "var(--success)",
        bodytext: "var(--bodytext)",
        bodycolor: "var(--bodycolor)",
        gray: "var(--gray)",
        link: "var(--link)",
        inactif: "var(--inactif)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
