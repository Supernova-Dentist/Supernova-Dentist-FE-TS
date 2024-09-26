type TableBody = {
  feature: string;
  data: Array<string | boolean>;
};

type Table = {
  tableHeadData: string[];
  tableBodyData: TableBody[];
};

type ComparisonData = {
  title: string;
  description: string;
  content: Table;
};

type ComparisonSection = {
  data: ComparisonData;
  id: string;
};

type ComparisonTable = {
  data: Table;
};
