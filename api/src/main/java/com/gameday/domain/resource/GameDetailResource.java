package com.gameday.domain.resource;

import com.gameday.domain.service.GameDetailService;
import com.gameday.domain.vo.GameDetailVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by damianijr on 25/04/17.
 */
@RestController
public class GameDetailResource {

    @Autowired
    private GameDetailService gameDetailService;

    @RequestMapping("/gameDetail/{id}")
    public @ResponseBody ResponseEntity<GameDetailVO> detail(@PathVariable final Long id) {
        try {
            return ResponseEntity.ok(this.gameDetailService.getDetails(id));
        }catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
