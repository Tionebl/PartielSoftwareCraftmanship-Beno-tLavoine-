import java.util.List;

public class OrderProcessor {
    private Database database;
    private EmailService emailService;
    private InventorySystem inventorySystem;

    public OrderProcessor(Database database, EmailService emailService, InventorySystem inventorySystem) {
        this.database = database;
        this.emailService = emailService;
        this.inventorySystem = inventorySystem;
    }

    public void processOrder(Order order) {
        verifyItemsAvailability(order.getItems());
        saveOrder(order);
        sendConfirmationEmail(order);
        updateInventory(order.getItems());
        applyLoyaltyDiscount(order);
    }

    private void verifyItemsAvailability(List<Item> items) {
        for (Item item : items) {
            if (!inventorySystem.isItemAvailable(item)) {
                throw new ItemNotAvailableException("Item not available in inventory: " + item.getName());
            }
        }
    }

    private void saveOrder(Order order) {
        database.saveOrder(order);
    }

    private void sendConfirmationEmail(Order order) {
        String message = "Your order has been received and is being processed.";
        emailService.sendEmail(order.getCustomerEmail(), "Order Confirmation", message);
    }

    private void updateInventory(List<Item> items) {
        for (Item item : items) {
            inventorySystem.updateInventory(item, -item.getQuantity());
        }
    }

    private void applyLoyaltyDiscount(Order order) {
        if (order instanceof LoyalCustomerOrder) {
            ((LoyalCustomerOrder) order).applyDiscount();
        }
    }
}

public class LoyalCustomerOrder extends Order {
    @Override
    public void applyDiscount() {
        setTotalPrice(getTotalPrice() * 0.9);
    }
}

public class ItemNotAvailableException extends RuntimeException {
    public ItemNotAvailableException(String message) {
        super(message);
    }
}

// liste de micro-méthode pour simplifier le code. Elles ont normalement en leurs seins le co
class Database {
    public void saveOrder(Order order) {
    }
}

class EmailService {
    public void sendEmail(String to, String subject, String message) {
    }
}

class InventorySystem {
    public boolean isItemAvailable(Item item) {
        return true; 
    }

    public void updateInventory(Item item, int quantity) {
    }
}

class Order {
    private List<Item> items;
    private String customerEmail;
    private double totalPrice;

    public List<Item> getItems() {
        return items;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public void applyDiscount() {
    }
}

class Item {
    private String name;
    private int quantity;

    public Item(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }
}
