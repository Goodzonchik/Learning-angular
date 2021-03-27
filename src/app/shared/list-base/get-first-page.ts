export function GetFirstPage() {
  return (
    target: Object,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<Function>
  ) => {
    const method = descriptor.value;
    descriptor.value = function () {
      const result = method.apply(this);
      this.getPage(0);
      return result;
    };
  };
}
