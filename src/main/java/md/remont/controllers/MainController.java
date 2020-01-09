package md.remont.controllers;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @RequestMapping(value ="product/{id}", method = RequestMethod.POST)
    public  String mainRequest (@RequestBody String request)
    {
        return null;
    }
}

