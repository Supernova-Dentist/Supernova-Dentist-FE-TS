type ServiceHeaderProps = {
  title: string;
  subTitle: string;
  className?: string;
};

type ServiceDescriptionProps = {
  description: string;
  className?: string;
};

type ServiceStatProps = {
  title: string;
  text: string;
};

type ServiceStatsProps = {
  stats: ServiceStatProps[];
};

type ServiceBoxProps = {
  title: string;
  subTitle: string;
  mainText: string;
  benefitText: string;
  stats: ServiceStatProps[];
};

type InfoSectionProps = {
  title: string;
  descriptions: string[];
  advantagesTitle: string;
  advantagesData: ListItmes;
  useCaseTitle: string;
  useCaseData: ListItmes;
};

type TextColors = {
  header: string;
  text: string;
};

type ServiceGridListItemProps = {
  id?: number;
  heading: string;
  text: string;
  textColors?: TextColors;
};

type ListItem = {
  id?: number;
  heading: string;
  text: string;
};

type ListItems = ListItem[];

type ServiceGridListProps = {
  listItems: ListItems;
  textColors?: TextColors;
};

type ServiceBenefitBox = {
  id?: number;
  icon: ReactElement;
  header: string;
  text: string;
};

type ServiceProcessBoxProps = {
  src: string;
  header: string;
  text: string;
};

type ServiceTestimonialBoxProps = {
  id?: number;
  name: string;
  text: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

type ServiceTestimonialsData = {
  data: ServiceTestimonialBoxProps[];
};

type HeroHeader = {
  header: { title: string; subTitle: string };
  mainText: string;
  benefitText: string;
  serviceStats: ServiceStatProps[];
};

type HeroSectionProps = {
  data: HeroHeader;
};

type BenefitSectionProps = {
  title: string;
  description: string;
  data: ServiceBenefitBox[];
};

type ProcessBoxData = {
  id?: number;
  src: string;
  header: string;
  text: string;
};

type ProcessSectionProps = {
  title: string;
  description: string;
  data: ProcessBoxData[];
};

type AftercareSectionProps = {
  title: string;
  descriptions: string[];
  data: ListItems;
};

type TableBodyProps = {
  feature: string;
  data: Array<string | boolean>;
};

type TableData = {
  tableHeadData: string[];
  tableBodyData: TableBodyProps[];
};

type ComparisonSectionProps = {
  title: string;
  description: string;
  data: TableData;
};

type ComparisonTableProps = {
  data: TableData;
};
