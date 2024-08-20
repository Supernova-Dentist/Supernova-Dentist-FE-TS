type TableBody = {
  feature: string;
  data: Array<string | boolean>;
};

type Table = {
  tableHeadData: string[];
  tableBodyData: TableBody[];
};

type ComparisonSection = {
  title: string;
  description: string;
  data: Table;
};

type ComparisonTable = {
  data: Table;
};
