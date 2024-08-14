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
