type FlyoutItems = Array<{ name: string; link: string }>;

type MainLink = {
  href: string | undefined;
  showFlyout: boolean;
  children?: React.ReactNode;
  flyoutItems: Array<{ name: string; link: string }>;
  open: boolean;
};

type FlyoutLinkProps = {
  children: React.ReactNode;
  href: string | undefined;
  flyoutItems: FlyoutItems;
};

type FlyoutList = {
  flyoutItems: FlyoutItems;
};
