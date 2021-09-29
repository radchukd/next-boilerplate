module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": `<rootDir>/__mocks__/fileMock.js`,
    "^@/assets/(.*)$": "<rootDir>/assets/$1",
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/constants/(.*)$": "<rootDir>/constants/$1",
    "^@/contexts/(.*)$": "<rootDir>/contexts/$1",
    "^@/hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/utils/(.*)$": "<rootDir>/utils/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};
