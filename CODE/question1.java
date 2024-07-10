import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OrderSystem {
    private Map<Integer, List<String>> orderList;

    public OrderSystem() {
        orderList = new HashMap<>();
    }

    public void addNewOrder(Integer customerID, String itemName) {
        List<String> items = orderList.getOrDefault(customerID, new ArrayList<>());
        items.add(itemName);
        orderList.put(customerID, items);
    }

    public void modifyOrder(Integer customerID, Integer itemIndex, String newItemName) {
        List<String> items = orderList.get(customerID);
        if (items != null && itemIndex >= 0 && itemIndex < items.size()) {
            items.set(itemIndex, newItemName);
        } else {
            System.out.println("Commande ou index invalide pour le client ID: " + customerID);
        }
    }

    public void removeOrder(Integer customerID, Integer itemIndex) {
        List<String> items = orderList.get(customerID);
        if (items != null && itemIndex >= 0 && itemIndex < items.size()) {
            items.remove(itemIndex);
        } else {
            System.out.println("Commande ou index invalide pour le client ID: " + customerID);
        }
    }

    public void printOrders() {
        for (Map.Entry<Integer, List<String>> entry : orderList.entrySet()) {
            System.out.println("Customer ID: " + entry.getKey());
            System.out.println("Items: " + String.join(", ", entry.getValue()));
            System.out.println();
        }
    }

    public static void main(String[] args) {
        OrderSystem os = new OrderSystem();
        os.addNewOrder(1, "Item1");
        os.addNewOrder(1, "Item2");
        os.addNewOrder(2, "ItemA");
        os.printOrders();
        os.modifyOrder(1, 1, "NewItem2");
        os.printOrders();
        os.removeOrder(2, 0);
        os.printOrders();
    }
}
