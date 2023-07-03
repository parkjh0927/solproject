package com.spring.domain;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MapDTO {
    private List<Map<String, String>> positions;

    public String getContentid(int index) {
    	return positions.get(index).get("contentid");
    }
    
    public String getContenttypeid(int index) {
    	return positions.get(index).get("contenttypeid");
    }

    public String getMapy(int index) {
        return positions.get(index).get("lat");
    }

    public String getMapx(int index) {
        return positions.get(index).get("lng");
    }
}