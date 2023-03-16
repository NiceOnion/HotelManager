package HotelManager;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Account {

    private @Id @GeneratedValue Long ID;
    private String Username;
    private String Password;
    private String Role;

    public Account(){}

    public Account(String Username, String Password, String Role){
        this.Username = Username;
        this.Password = Password;
        this.Role = Role;
    }

    public Long getID() {
        return ID;
    }
    public String getUsername() {
        return Username;
    }
    public String getPassword() {
        return Password;
    }
    public String getRole() {
        return Role;
    }
    public void setID(Long ID) {
        this.ID = ID;
    }
    public void setUsername(String username) {
        Username = username;
    }
    public void setPassword(String password) {
        Password = password;
    }
    public void setRole(String role) {
        Role = role;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if(!(o instanceof Account)){
            return false;
        }
        Account account = (Account)o;

        return Objects.equals(this.ID, account.ID) && Objects.equals(this.Username, account.Username)
                && Objects.equals(this.Password, account.Password) && Objects.equals(this.Role, account.Role);
    }

    @Override
    public int hashCode(){
        return Objects.hash(this.ID, this.Username, this.Password, this.Role);
    }

    @Override
    public String toString(){
        return "HotelManager.Account{" + ", id=" + this.ID + ", name='" + this.Username + "', Role=" + this.Role + '}';
    }
}
