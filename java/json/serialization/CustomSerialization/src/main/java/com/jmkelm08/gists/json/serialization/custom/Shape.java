package com.jmkelm08.gists.json.serialization.custom;

import javax.xml.bind.annotation.XmlSeeAlso;

@XmlSeeAlso({Triangle.class, Rectangle.class})
public class Shape {
	private String name;
	private int numSides;
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public int getNumSides() {
		return numSides;
	}
	
	public void setNumSides(int numSides) {
		this.numSides = numSides;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + numSides;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Shape other = (Shape) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (numSides != other.numSides)
			return false;
		return true;
	}
}
