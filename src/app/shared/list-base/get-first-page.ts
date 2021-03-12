export function GetFirstPage() {
  return (
    target: Object,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<Function>
  ) => {
    const method = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const result = method.apply(this, args);
      this.getPage(0);
      return result;
    };
  };
}
