import { VNode } from "./vnode";

export type RootRenderFunction<HostElement = RendererElement> = (
  message: VNode,
  container: HostElement,
) => void;

export type RendererOptions<HostNode = RendererNode> = {
  createElement(type: string): HostNode;
  createText(text: string): HostNode;
  setElementText(node: HostNode, text: string): void;
  insert(child: HostNode, parent: HostNode, anchor?: HostNode | null): void;
};

export type RendererNode = {
  [key: string]: any;
};

export type RendererElement = RendererNode & {};

export const createRenderer = (options: RendererOptions) => {
  const {
    createElement: hostCreateElement,
    createText: hostCreateText,
    insert: hostInsert,
  } = options;

  const renderVNode = (vnode: VNode | string) => {
    if (typeof vnode === "string") return hostCreateText(vnode);

    const el = hostCreateElement(vnode.type);

    for (const child of vnode.children) {
      const childEl = renderVNode(child);
      hostInsert(childEl, el);
    }

    return el;
  };

  const render: RootRenderFunction = (vnode, container) => {
    const el = renderVNode(vnode);
    hostInsert(el, container);
  };

  return { render };
};
