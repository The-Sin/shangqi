using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using Map.Models;
using Newtonsoft.Json;


namespace Map.Controllers
{
    public class MapController : Controller
    {
        Models.DBtestEntities dbt = new Models.DBtestEntities();
        // GET: Map
        public ActionResult Index()
        {
            return View();
        }
        public string coordinate()
        {
            var coordinate = from a in dbt.test
                              select new
                              {
                                  a.latitude,
                                  a.longitude
                              };
            var coordinate1 = from a in dbt.test
                             where a.carNum== 1
                             select new
                             {
                                 a.latitude,
                                 a.longitude
                             };
            var coordinate2 = from a in dbt.test
                             where a.carNum == 2
                             select new
                             {
                                 a.latitude,
                                 a.longitude
                             };
            //JSONArray.fromObject(coordinate).toString();
            //string zb = JsonConvert.SerializeObject(coordinate);
            //string[] b = Regex.Split(zb, "latitude", RegexOptions.IgnoreCase);
            //return JsonConvert.SerializeObject(coordinate);
            var result = new
            {
                coordinate1,
                coordinate2
            };
            //return JsonConvert.SerializeObject(result);
            return JsonConvert.SerializeObject(coordinate1);
        }
        public string coordinate2()
        {
            var coordinate2 = from a in dbt.test
                              where a.carNum == 2
                              select new
                              {
                                  a.latitude,
                                  a.longitude
                              };
            return JsonConvert.SerializeObject(coordinate2);
        }
    }
}