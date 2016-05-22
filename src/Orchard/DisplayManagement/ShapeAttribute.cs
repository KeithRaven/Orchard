using System;

namespace Orchard.DisplayManagement {
    public class ShapeAttribute : Attribute {
        public ShapeAttribute() { }
        public ShapeAttribute(string shapeType) { this.ShapeType = shapeType; }
        public ShapeAttribute(string shapeType = "", string bindingType = "") {
            if (!string.IsNullOrWhiteSpace(shapeType)) {
                this.ShapeType = shapeType;
            }

            if (!string.IsNullOrEmpty(bindingType)) {
                this.BindingType = bindingType;
            }
        }

        public string BindingType { get; private set; }
        public string ShapeType { get; private set; }
    }
}