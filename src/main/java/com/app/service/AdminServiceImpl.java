package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CitiesRepository;
import com.app.dto.CityDTO;
import com.app.pojos.Cities;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired CitiesRepository cityRepo; 
	@Override
	public void addCity(CityDTO cityDto) {
		List<Cities> cities = cityRepo.getCities();
		String[] cityArray = cityDto.getCityNames();
		if (cities.isEmpty()) {
			cityRepo.save(new Cities(cityArray[0]));
			cityRepo.save(new Cities(cityArray[1]));
		} else {
			for (int i = 0; i < cityArray.length; i++) {
				boolean flag = false;
				while (!flag) {
					for (Cities city : cities) {
						if ((cityArray[i].equalsIgnoreCase(city.getCity()))) {
							flag = true;
							break;
						}
					}
					if (!flag)
						break;
				}
				if (!flag)
					cityRepo.save(new Cities(cityArray[i]));
			}
		}
	}
}


