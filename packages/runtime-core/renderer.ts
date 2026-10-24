export type RootRenderFunction<HostElement = RendererElement> = (
  message: string,
  container: HostElement,
) => void;

export type RendererOptions<HostNode = RendererNode> = {
  setElementText(node: HostNode, text: string): void;
};

export type RendererNode = {
  [key: string]: any;
};

export type RendererElement = RendererNode & {};

export const createRenderer = (options: RendererOptions) => {
  const { setElementText: hostSetElementText } = options;

  const render: RootRenderFunction = (message, container) => {
    hostSetElementText(container, message);
  };

  return { render };
};
