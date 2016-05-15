using System.Collections.Generic;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Orchard.Mvc.Routes;

namespace Raven.AsyncShapes
{
    public class Routes : IRouteProvider
    {
        public void GetRoutes(ICollection<RouteDescriptor> routes)
        {
            foreach (var routeDescriptor in GetRoutes())
                routes.Add(routeDescriptor);
        }

        public IEnumerable<RouteDescriptor> GetRoutes()
        {
            return new[] {
                new RouteDescriptor {
                    Name="AsyncTemplate",
                    Priority = 1,
                    Route = new Route(
                        "AsyncShapes/Templates/{templateType}/{contentType}/{displayType}",
                        new RouteValueDictionary {
                            {"area", "Raven.AsyncShapes"},
                            {"controller", "Templates"},
                            {"action", "Index"},
                            { "displayType", "Detail"}
                        },
                        new RouteValueDictionary {
                        },
                        new RouteValueDictionary {
                            {"area", "Raven.AsyncShapes"}
                        },
                        new MvcRouteHandler())
                }
            };
        }

    }
}