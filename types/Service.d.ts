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
  mainText: string;
  benefitText: string;
  stats: ServiceStat[];
};

type InfoSectionData = {
  title: string;
  descriptions: string[];
  advantagesTitle: string;
  useCaseTitle: string;
};

type InfoSection = {
  data: InfoSectionData;
  advantagesData: ListItems;
  useCaseData: ListItems;
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

type ServiceBenefit = {
  id?: number;
  icon: ReactElement;
  header: string;
  text: string;
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
};

type HeroHeaderContent = {
  header: { title: string; subTitle: string };
  mainText: string;
  benefitText: string;
  serviceStats: ServiceStat[];
};

type HeroSection = {
  data: HeroHeaderContent;
};

type BenefitSection = {
  title: string;
  description: string;
  data: ServiceBenefit[];
};

type ProcessBox = {
  id?: number;
  src: string;
  header: string;
  text: string;
};

type ProcessSection = {
  title: string;
  description: string;
  data: ProcessBox[];
};

type AftercareSection = {
  title: string;
  descriptions: string[];
  data: ListItems;
};
