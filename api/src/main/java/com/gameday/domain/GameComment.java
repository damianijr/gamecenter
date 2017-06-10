package com.gameday.domain;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

/**
 * Created by damianijr on 25/04/17.
 */
public class GameComment {

    @Id
    private String id;
    private Long gameId;
    private String user;
    private String comment;
    private LocalDateTime dateTime;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Long getGameId() {
        return gameId;
    }

    public void setGameId(Long gameId) {
        this.gameId = gameId;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }
}
