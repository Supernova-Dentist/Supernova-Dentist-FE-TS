type TextColorScheme = {
  header: string;
  text: string;
};

type ListItem = {
  id?: number;
  heading: string;
  text: string;
};

type ListItems = ListItem[];

type ServiceStat = {
  title: string;
  text: string;
};

type ServiceHeader = {
  title: string;
  subTitle: string;
  className?: string;
};

type ServiceDescription = {
  description: string;
  className?: string;
};

type ServiceStats = {
  stats: ServiceStat[];
};

type ServiceBox = {
  title: string;
  subTitle: string;
  benefitText: string;
  stats: ServiceStat[];
};

type InfoSectionData = {
  title: string;
  descriptions: string[];
  advantagesTitle: string;
  useCaseTitle: string;
  advantagesData: ListItems;
  useCaseData: ListItems;
};

type InfoSection = {
  data: InfoSectionData;
};

type ServiceGridListItem = {
  id?: number;
  heading: string;
  text: string;
  textColors?: TextColorScheme;
};

type ServiceGridList = {
  listItems: ListItems;
  textColors?: TextColorScheme;
};

type ServiceProcess = {
  src: string;
  header: string;
  text: string;
};

type ServiceTestimonial = {
  id?: number;
  name: string;
  text: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

type ServiceTestimonials = {
  data: ServiceTestimonial[];
  id: string;
};

type HeroHeaderContent = {
  header: { title: string; subTitle: string };
  mainText?: string;
  benefitText: string;
  serviceStats: ServiceStat[];
};

type HeroSection = {
  data: HeroHeaderContent;
};

type BenefitContent = {
  id?: number;
  icon: ReactElement;
  header: string;
  text: string;
};

type BenefitData = {
  title: string;
  description: string;
  content: BenefitContent[];
};

type BenefitSection = {
  data: BenefitData;
  id: string;
};

type ProcessContent = {
  id?: number;
  src: string;
  header: string;
  text: string;
};

type ProcessData = {
  title: string;
  description: string;
  content: ProcessContent[];
};

type ProcessSection = {
  data: ProcessData;
};

type AfterCareData = {
  title: string;
  descriptions: string[];
  content: ListItems;
};

type AftercareSection = {
  data: AfterCareData;
};
