package com.jmkelm08.gists.json.serialization.custom;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="rectangle")
public class Rectangle extends Shape {
	private boolean isSquare;
	
	public boolean isSquare() {
		return isSquare;
	}
	
	public void setSquare(boolean isSquare) {
		this.isSquare = isSquare;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + (isSquare ? 1231 : 1237);
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
		Rectangle other = (Rectangle) obj;
		if (isSquare != other.isSquare)
			return false;
		return true;
	}
	
}
