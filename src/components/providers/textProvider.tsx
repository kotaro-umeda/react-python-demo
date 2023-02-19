import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
type Props = {
  children: ReactNode;
};
export type ContextType = { city: string | {}; setCity: Dispatch<SetStateAction<{}>> };
export const TextContext = createContext<ContextType | {}>({});
export const TextProvider = (props: Props) => {
  const { children } = props;
  const [city, setCity] = useState<ContextType | {}>({});
  return <TextContext.Provider value={{ city, setCity }}>{children}</TextContext.Provider>;
};
