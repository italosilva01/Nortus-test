import fs from "fs";

export const saveFile = async (filePath: string, data: unknown) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export const readFileBuffer = <T = unknown>(filePath: string): T => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data) as T;
};
