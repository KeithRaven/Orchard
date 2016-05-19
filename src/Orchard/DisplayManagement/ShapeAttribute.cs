using System;
﻿using Orchard.DisplayManagement.Descriptors;

namespace Orchard.DisplayManagement {
    public class ShapeAttribute : Attribute {
        public ShapeAttribute() { }
        public ShapeAttribute(string shapeType) { this.ShapeType = shapeType; }
        public ShapeAttribute(string shapeType = "", string bindingType = "Display") {
            if (!string.IsNullOrWhiteSpace(shapeType)) {
                this.ShapeType = shapeType;
            }

            this.BindingType = bindingType;
        }

        public string BindingType { get; private set; } = "Display";
        public string ShapeType { get; private set; }
    }
}