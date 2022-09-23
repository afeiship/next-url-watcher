type Destroyable = {
  destroy(): void;
}

interface NxStatic {
  UrlWatcher: {
    watch(callback: any): Destroyable;
  }
}
