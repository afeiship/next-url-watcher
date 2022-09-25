type Destroyable = {
  destroy(): void;
}

type Options = {
  interval: number;
  immediate: boolean
}

interface NxStatic {
  UrlWatcher: {
    new(options: Options)
    watch(callback: any): Destroyable;
  }
}
