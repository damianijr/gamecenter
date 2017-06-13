package com.gameday.domain.projection;

import com.gameday.domain.Game;
import com.gameday.domain.Team;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import java.time.LocalDateTime;

/**
 * Created by damianijr on 25/04/17.
 */
@Projection(name = "gameCenter", types =  { Game.class, Team.class})
public interface GameCenteProjection {
    LocalDateTime getTime();

    @Value("#{target.away.name}")
    String getAway();
    int getAwayScore();

    @Value("#{target.home.name}")
    String getHome();
    int getHomeScore();
}
