export interface Planet {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  facts: {
    [key: string]: string;
  };
}