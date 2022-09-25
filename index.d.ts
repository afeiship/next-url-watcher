type Destroyable = {
  destroy(): void;
}

type Options = {
  interval: number;
  immediate: boolean
}

type WatchCallback = (previous: string, current: string) => void;

type UrlWatcher = {
  watch(callback: WatchCallback): Destroyable;
}

interface NxStatic {
  UrlWatcher: {
    new(options: Partial<Options>): UrlWatcher
  }
}
