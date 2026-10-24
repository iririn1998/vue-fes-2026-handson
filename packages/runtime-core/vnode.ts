export type VNodeTypes = string | typeof Text;

export const Text = Symbol();

export type VNode<HostNode = any> = {
  type: VNodeTypes;
  props: VNodeProps | null;
  children: VNodeNormalizedChildren;

  el: HostNode | undefined;
};

export type VNodeProps = {
  [key: string]: any;
};

export type VNodeNormalizedChildren = string | VNodeArrayChildren;
export type VNodeArrayChildren = Array<VNodeArrayChildren | VNodeChildAtom>;

export type VNodeChild = VNodeChildAtom | VNodeArrayChildren;
type VNodeChildAtom = VNode | string;

export const createVNode = (
  type: VNodeTypes,
  props: VNodeProps | null,
  children: VNodeNormalizedChildren,
): VNode => {
  const vnode: VNode = { type, props, children, el: undefined };
  return vnode;
};

export const normalizeVNode = (child: VNodeChild): VNode => {
  if (typeof child === "object") {
    return { ...child } as VNode;
  } else {
    return createVNode(Text, null, String(child));
  }
};
