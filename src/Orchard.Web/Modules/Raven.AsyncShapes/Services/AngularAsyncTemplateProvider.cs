using Raven.Api.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Raven.AsyncShapes.Services
{
    public class AngularAsyncTemplateProvider : IAsyncTemplateProvider
    {
        public string GetTemplateUrl(RequestContext context, string ContentType, string displayType)
        {
            UrlHelper urlHelper = new UrlHelper(context);
            return urlHelper.Action("Index", "Templates", new { area = "Raven.AsyncShapes", contentType = ContentType, displayType = displayType, templateType = "Angular" });
        }
    }
}