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
  name: string;
  text: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};
