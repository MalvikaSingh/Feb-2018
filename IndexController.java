package com.example.demo;

import java.util.Arrays;
import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/home")
public class IndexController {
    /*@RequestMapping(value = "/fetch/{month:[A-z]+}/{year}", method = RequestMethod.GET)
    String getDynamicUriValue(@PathVariable String month,@PathVariable String year) {
        System.out.println("Month is " + month);
        System.out.println("Year is " + year);
        return "Dynamic URI parameter fetched";
    }*/
    @RequestMapping("/request7")
    @ResponseBody
    public String handler(@RequestParam("month") String month,
    		@RequestParam("year") int year,
    		@RequestParam("country") String country,
          @RequestParam("applications") List<String> apps) {

       return "URL parameters - <br>" 
             + " month = " + month + " <br>"
             + " year  = " +year+" <br> "
             + " country= "+country+" <br> "
             + " Selected applications = " + apps;
    }
}
