const extractParameter = (
  templateChunk: string,
  pathChunk: string
): boolean | [string, string] => {
  const coincidence = templateChunk.match(/{\w+}/);

  if (coincidence) {
    return [coincidence[0].substr(1, templateChunk.length - 2), pathChunk];
  }
  return pathChunk === templateChunk;
};

export const match = (
  template: string,
  path: string,
  exact: boolean = false
): null | { [key: string]: string } => {
  const routeChunks = template.split('/');
  const pathChunks = path.split('/');

  if (
    routeChunks.length > pathChunks.length ||
    (exact && routeChunks.length !== pathChunks.length)
  ) {
    return null;
  }

  const resultParams = {};
  for (let i = 0; i < routeChunks.length; i++) {
    const res = extractParameter(routeChunks[i], pathChunks[i]);
    if (!res) {
      return null;
    }
    if (Array.isArray(res)) {
      resultParams[res[0]] = res[1];
    }
  }

  return resultParams;
};
