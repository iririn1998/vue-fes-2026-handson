export type VNode = {
  type: string;
  props: VNodeProps;
  children: (VNode | string)[];
};

export type VNodeProps = {
  [key: string]: any;
};
