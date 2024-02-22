module.exports = {
  types: [
    { value: ":sparkles: feat", name: "✨ feat:\tAdding a new feature." },
    { value: ":bug: fix", name: "🐛 fix:\tFixing a bug." },
    {
      value: ":lipstick: style",
      name: "💄 style:\tAdd or update styles, ui or ux.",
    },
    {
      value: ":package: package",
      name: "📦 package:\tAdd or update compiled files or packages",
    },
    {
      value: ":wrench: configuration",
      name: "🔧 configuration:\tAdd or update configuration files.",
    },
    { value: ":fire: remove", name: "🔥 remove\tRemove code or files." },
    { value: ":rewind: revert", name: "⏪ revert\tRevert to a commit." },
    { value: ":rocket: build", name: "🚀 build\tDeploy our application." },
    {
      value: ":money_with_wings: pull",
      name: "💸 pull\tPulled form other branch.",
    },
    {
      value: ":heavy_plus_sign: dependency",
      name: "➕ dependency\tAdd a dependency.",
    },
    {
      value: ":heavy_minus_sign: dependency",
      name: "➖ dependency\tRemove a dependency.",
    },
    {
      value: ":arrow_down: dependency",
      name: "⬇️ dependency\tDowngrade dependencies.",
    },
    {
      value: ":arrow_up: dependency",
      name: "⬆️ dependency\tUpgrade dependencies.",
    },
  ],
  scopes: ["yehtetaung"],
  allowCustomScope: true,
  scopeOverrides: {
    fix: [{ name: "merge" }, { name: "style" }],
    build: [{ name: "build" }],
  },
  allowBreakingChanges: ["feat", "fix"],
  skipQuestions: ["footer", "breaking"],
  subjectLimit: 100,
};
