using Orchard.DisplayManagement.Descriptors;
using Orchard.DisplayManagement.Implementation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Raven.AsyncShapes.Extensions
{
    public static class DisplayHelperExtensions
    {
        public static dynamic DisplayAction(this DisplayHelper helper, dynamic shape, BindingAction bindingAction) {
            helper.BindingAction = bindingAction;
            return helper.ShapeExecute(shape);
        }
    }
}