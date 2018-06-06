package com.jmkelm08.gists.json.serialization.custom;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="triangle")
public class Triangle extends Shape {
	private boolean isEquilateral;
	
	public boolean isEquilateral() {
		return isEquilateral;
	}
	
	public void setEquilateral(boolean isEquilateral) {
		this.isEquilateral = isEquilateral;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + (isEquilateral ? 1231 : 1237);
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		Triangle other = (Triangle) obj;
		if (isEquilateral != other.isEquilateral)
			return false;
		return true;
	}
	
}
