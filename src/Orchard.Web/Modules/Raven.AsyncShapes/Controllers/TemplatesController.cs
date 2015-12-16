using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Orchard;
using Orchard.DisplayManagement.Descriptors;
using Orchard.Mvc;
using Raven.Api.DisplayManagement;

namespace Raven.AsyncShapes.Controllers
{
    public class TemplatesController : Controller
    {
        private readonly IOrchardServices _services;

        public TemplatesController(
            IOrchardServices services) {
            _services = services;
        }

        // GET: Templates
        public ActionResult Index(string contentType, string displayType = "summary")
        {
            contentType = "Simple";
            displayType = "Summary";

            var model = _services.ContentManager.New(contentType);
            var vm = _services.ContentManager.BuildDisplay(model);
            return View(vm);
        }
    }
}